// SPDX-License-Identifier: GPL-3.0
// Telling the compiler which version of solidity to use
pragma solidity >=0.7.0 <0.9.0;

/** 
 * To do app that will store pending task and mark task done
 */
contract TodoApp {
   
    struct Task{
        string taskname; 
        bool done; //if true task is done
    }

    //list of the task
    mapping(address => Task[]) private taskList;

    //function to create task
    function createTask(string memory taskName) public {
        taskList[msg.sender].push(Task(taskName,false));
    }

    //function to mark task as done
    function markDone(uint taskIndex) public{
        require(taskList[msg.sender].length > taskIndex, "Invalid Task Id Provided!");
        require(taskList[msg.sender][taskIndex].done == false, "Task is already marked done!");
        taskList[msg.sender][taskIndex].done = true;
    }

    //function to get all the task
    function getView() public view returns(Task[] memory){
        return taskList[msg.sender];
    }

}

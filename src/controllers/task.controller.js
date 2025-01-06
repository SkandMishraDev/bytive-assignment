import mongoose, { model } from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Task } from "../models/task.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createTask = asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        throw new ApiError(409, "Both fields are required");
    }

    const taskCreated = await Task.create({
        title,
        description,
    });

    if (!taskCreated) {
        throw new ApiError(500, "Unable to create a new Task");
    }

    res.status(201).json(
        new ApiResponse(201, taskCreated, "Task created successfully")
    );
});

const updateTask = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    if (!id) {
        throw new ApiError(400, "ID is required")
    }
    if (!title && !description && !status) {
        throw new ApiError(400, "At least one field is required to update")
    }
    const exist = await Task.findById(id);
    if (!exist) {
        return res.status(404).json(
            new ApiResponse(404, null, "Task with ID not found")
        );
    }
    const fields = {};
    if (title) fields.title = title;
    if (description) fields.description = description;
    if (status) fields.status = status;
    const task = await Task.findByIdAndUpdate(
        id,
        fields,
        { new: true }
    );

    res.status(200).json(
        new ApiResponse(200, task, "Task updated successfully")
    );
});

const getTask = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        throw new ApiError(409, "Task id is required");
    }

    const task = await Task.findById({ _id: id });
    if (!task) {
        return res.status(404).json(
            new ApiResponse(404, null, "Task not found")
        );
    }

    res.status(200).json(
        new ApiResponse(200, task, "Task fetched successfully")
    );
});

const getAllTask = asyncHandler(async (req, res) => {
    const allTasks = await Task.find({});
    return res.status(200).json(
        new ApiResponse(200, allTasks, "All tasks fetched successfully")
    );
})

const deleteTask = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        throw new ApiError(400, "ID is required");
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
        throw new ApiError(404, "Task with the specified ID not found.");
    }
    res.status(200).json(
        new ApiResponse(204, null, "Task deleted successfully")
    );
});


export { createTask, updateTask, getTask, getAllTask, deleteTask };

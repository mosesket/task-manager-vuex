import axios from "axios";
import API_BASE_URL from "../config";

export const createTask = ({ commit }, task) => {
  axios.post(`http://127.0.0.1:8000/api/tasks`, task).then((res) => {
    commit("ADD_TASK", task);
  });
};

export const getTasks = ({ commit }) => {
  axios.get("http://127.0.0.1:8000/api/tasks").then((res) => {
    commit("SET_TASKS", res.data.tasks);
  });
};

export const getTask = ({ commit }, id) => {
  axios.get(`http://127.0.0.1:8000/api/tasks/${id}`).then((res) => {
    console.log(res.data.task);
    commit("SET_TASK", res.data.task);
  });
};

export const updateTask = ({ commit }, id) => {
  axios.put(`http://127.0.0.1:8000/api/tasks/${id}`).then((res) => {
      commit("UPDATE_TASK", res.data.task);
    });
  window.location.href = "/";
};

export const deleteTask = ({ commit }, task) => {
  axios.delete(`http://127.0.0.1:8000/api/tasks/${task}`);
  commit("DELETE_TASK", task);
};

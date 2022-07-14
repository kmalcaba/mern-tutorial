import axios from "axios";

const API_URL = "api/goals";

const createGoal = async (goalData, token) => {
  const config = createConfig(token);

  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

const getGoals = async (token) => {
  const config = createConfig(token);

  const response = await axios.get(API_URL, config);

  return response.data;
};

const deleteGoal = async (id, token) => {
  const config = createConfig(token);

  const response = await axios.delete(`${API_URL}/${id}`, config);

  return response.data;
};

const createConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;

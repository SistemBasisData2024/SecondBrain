import axios from "axios";

const API_URL = "http://localhost:3000"; 

const baseApiResponse = (data, isSuccess) => {
    return {
        success: isSuccess,
        data: data || null,
    };
};

export const createTeam = async (owner_id, title) => {
    try {
        const response = await axios.post(`${API_URL}/team/create`, {
            owner_id,
            title,
        });
        console.log('API response:', response.data); 
        return { success: true, data: response.data };
    } catch (error) {
        console.error('API error:', error.response?.data);
        return { success: false, message: error.response?.data?.message || error.message };
    }
};

export const getTeamByTeamId = async (teamId) => {
    try {
        const response = await axios.get(`${API_URL}/team/${teamId}`);
        return baseApiResponse(response.data, true);
    } catch (error) {
        return baseApiResponse(error.response.data, false);
    }
};

export const getAllTeams = async () => {
    try {
        const response = await axios.get(`${API_URL}/team/`);
        return baseApiResponse(response.data, true);
    } catch (error) {
        return baseApiResponse(error.response.data, false);
    }
};

export const getTeams = async () => {
    try {
        // Retrieve UserID from local storage
        const userID = localStorage.getItem('userID');
        
        if (!userID) {
            throw new Error("UserID not found in local storage");
        }

        const response = await axios.get(`${API_URL}/team/account/${userID}`);
        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        return {
            success: false,
            data: error.response ? error.response.data : error.message,
        };
    }
};

export const getMembersFromTeam = async (teamId) => {
    try {
        const response = await axios.get(`${API_URL}/team/member/${teamId}`);
        return baseApiResponse(response.data, true);
    } catch (error) {
        return baseApiResponse(error.response.data, false);
    }
};

export const deleteTeam = async (teamId) => {
    try {
        const response = await axios.delete(`${API_URL}/team/${teamId}`);
        return baseApiResponse(response.data, true);
    } catch (error) {
        return baseApiResponse(error.response.data, false);
    }
};

export const updateTeam = async (teamId, teamName) => {
    try {
        const response = await axios.put(`${API_URL}/team/update`, {
            teamId,
            teamName,
        });
        return baseApiResponse(response.data, true);
    } catch (error) {
        return baseApiResponse(error.response.data, false);
    }
};

export const joinTeam = async (teamId, accountId, memberName) => {
    try {
        const response = await axios.post(`${API_URL}/team/join/${teamId}`, {
            accountId,
            memberName,
        });
        return baseApiResponse(response.data, true);
    } catch (error) {
        return baseApiResponse(error.response.data, false);
    }
};

export const leaveTeam = async (teamId, accountId) => {
    try {
        const response = await axios.post(`${API_URL}/team/leave/${teamId}`, {
            accountId,
        });
        return baseApiResponse(response.data, true);
    } catch (error) {
        return baseApiResponse(error.response.data, false);
    }
};

export const kickMember = async (accountId, teamId) => {
    try {
        const response = await axios.post(`${API_URL}/team/kick/${accountId}`, {
            teamId,
        });
        return baseApiResponse(response.data, true);
    } catch (error) {
        return baseApiResponse(error.response.data, false);
    }
};

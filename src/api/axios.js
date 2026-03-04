import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const axiosInstance = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

axiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		if (error.response?.status === 401 && !error.config._retry) {
			error.config._retry = true;

			try {
				const res = await axiosInstance.post(
					"/auth/refresh",
					{},
					{ withCredentials: true },
				);

				const newAccessToken = res.data.accessToken;
				localStorage.setItem("token", newAccessToken);

				error.config.headers.Authorization = `Bearer ${newAccessToken}`;
				return axiosInstance(error.config);
			} catch (refreshError) {
				localStorage.clear();
				window.location.href = "/login";
			}
		}

		return Promise.reject(error);
	},
);

export default axiosInstance;

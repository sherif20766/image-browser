import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID 3d9b2e81688a801e25ca1d9e976fa5512311f7b57115c1c3a7a2e250f691ddc4"
	}
});
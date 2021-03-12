import axios from "axios";

export default axios.create({
  baseURL:
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=IbpAOVOu6DmcVMGLrCm24LrACGkcbRfr"
});

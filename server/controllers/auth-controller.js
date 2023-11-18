const home = async (req, res) => {
  try {
    res.status(200).send("Har Har Mahadev2");
  } catch (error) {
    console.log(error);
  }
};

// register logic
const register = async (req, res) => {
  try {
    res.status(200).send("Register Page2");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };

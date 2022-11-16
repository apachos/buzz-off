exports.tryOperation = async (res, operation) => {
  try {
    await operation();
  } catch (error) {
    res.status(500).json({ error: error.message || error });
  }
};

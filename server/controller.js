module.exports = {
  getAll: (req, res) => {
    req.app
      .get('db')
      .get_houses()
      .then(houses => {
        res.status(200).send(houses);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log({ err });
      });
  }
};

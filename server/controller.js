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
  },
  create: (req, res) => {
    let { name, address, city, state, zip } = req.body;

    req.app
      .get("db")
      .create_product([name, address, city, state, zip])
      .then(() => {
        res.status(200).send();
      })
      .catch(error => {
        console.log({ error });
        res.status(500).send(error);
      });
    },
    delete: (req, res) => {
      let { id } = req.params;
  
      req.app
        .get("db")
        .delete_product([id])
        .then(() => {
          res.status(200).send();
        })
        .catch(err => {
          console.log({ err });
          res.status(500).send(err);
        });
    }, 
};

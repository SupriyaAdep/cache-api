const model = require('./dummy.model');

const getOne = async (req, res) => {
  try {
    const doc = await model
      .findOne({ key: req.params.id })
      .lean()
      .exec();

    if (!doc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const getMany = async (req, res) => {
  try {
    const docs = await model
      .find({})
      .lean()
      .exec();

    res.status(200).json({ data: docs });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const createOne = async (req, res) => {
  try {
    const doc = await model.create(req.body);
    res.status(201).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const updateOne = async (req, res) => {
  try {
    const updatedDoc = await model
      .findOneAndUpdate(
        {
          key: req.params.key
        },
        req.body,
        { new: true }
      )
      .lean()
      .exec();

    if (!updatedDoc) {
      return res.status(400).end();
    }

    res.status(200).json({ data: updatedDoc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const removeOne = async (req, res) => {
  try {
    const removed = await model.findOneAndRemove({
      key: req.params.key
    });

    if (!removed) {
      return res.status(400).end();
    }

    return res.status(200).json({ data: removed });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = {
  getOne,
  getMany,
  createOne,
  updateOne,
  removeOne
};

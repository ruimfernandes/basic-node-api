const DUMMY_DATA = [
  { name: 'John Doe', age: 20, gender: 'male' },
  { name: 'Jane Doe', age: 21, gender: 'female' }
];

export class UserController {
  constructor() {}

  find(req, res) {
    res.json(DUMMY_DATA);
  }

  create(req, res) {
    console.log(req.body);
    DUMMY_DATA.push(req.body);

    res.json(req.body);
  }
}

export default new UserController();

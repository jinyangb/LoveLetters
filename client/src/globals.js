const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'

export default BASE_URL



mongodb+srv://jin:Br@nc@lhao1@my-cluster.5bhuu.mongodb.net/lettersDatabase?retryWrites=true&w=majority
heroku config:set MONGODB_URI='mongodb+srv://jin:lv1AZXiCK1QDWFXq@my-cluster.5bhuu.mongodb.net/lettersDatabase?retryWrites=true&w=majority'

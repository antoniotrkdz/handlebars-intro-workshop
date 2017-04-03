// JS file for custom helper function
module.exports = function(context) {
  var user = context.data.root.user;

  if (user.role === 'admin') { //if user is admin
    return context.fn(this)
  }
  return context.inverse(this)
}

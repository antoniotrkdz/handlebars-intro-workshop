module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    const data = {
      title: 'Intro to Handlebars',
      message: 'Let\'use handlebars',
      user: {
        firstname: 'Antonio',
        lastname: 'Trabalza',
        role: 'admin'
      }
    }
    reply.view('index',data);
    // reply('Welcome to Handlebars 101!');
    // reply.view('index');
  }
}

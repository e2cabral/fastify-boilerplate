import app from './main/config/app.config';

app.listen(3000, (err: Error, address: string) => {
  if (err) {
    app.log.error(err.message);
    process.exit(1);
  }
  app.swagger();
  app.log.info(`Server is running on ${address}`);
});

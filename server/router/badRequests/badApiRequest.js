const badApiRequest = (request, response) => {
  response.status(404).send({ message: "Route not found, please read the docs for information on how to use BuzzFeedChallenge's APIs." });
};
export default badApiRequest;

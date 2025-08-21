export type RandomUser = {
  name: { title: string; first: string; last: string };
  email: string;
  login: { uuid: string; username: string };
  picture: { thumbnail: string; medium: string; large: string };
};

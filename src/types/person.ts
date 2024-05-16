type Name = {
  first: string;
  last: string;
};

type Picture = {
  thumbnail: string;
  large: string;
};

type Location = {
  state: string;
  city: string;
};

type Registered = {
  date: string;
};

type Person = {
  name: Name;
  email: string;
  picture: Picture;
  location: Location;
  phone: string;
  registered: Registered;
};

export default Person;

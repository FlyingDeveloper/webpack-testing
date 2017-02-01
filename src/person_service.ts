import Person from './person';

class PersonService {
  static getPeople():Array<Person> {
    const people = [];
    people.push(new Person('Rob', 'Hamilton'));
    people.push(new Person('Courtney', 'Hamilton'));
    people.push(new Person('Tony', 'Munoz'));
    people.push(new Person('John', 'Cesaroni'));
    return people;
  }
}

export default PersonService;

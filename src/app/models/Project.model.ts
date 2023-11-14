export class Project {
  name?: string;
  link?: string;
  location?: string;
  title?: string;
  description?: string;

  constructor(name?: string, link?: string, location?: string, title?: string, description?: string) {
    this.name = name;
    this.link = link;
    this.location = location;
    this.title = title;
    this.description = description;
  }
}

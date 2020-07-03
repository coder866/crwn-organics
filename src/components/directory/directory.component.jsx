import React from "react";
import "./directory.style.scss";
import MenuItem from "../menuitem/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "vegetables",
          imageUrl:
            "https://i.ibb.co/k24SqKm/chantal-garnier-910-Ganw-Boew-unsplash.jpg",
          id: 1,
          linkUrl: "vegetables",
        },
        {
          title: "cereals",
          imageUrl:
            "https://i.ibb.co/Ydgjjvp/v2osk-c9-Ofr-Ve-D-t-Q-unsplash.jpg",
          id: 2,
          linkUrl: "",
        },
        {
          title: "spices",
          imageUrl:
            "https://i.ibb.co/d2Lg8zF/laura-cortesi-NMF5s-Ea-HUmo-unsplash.jpg",
          id: 3,
          linkUrl: "",
        },
        {
          title: "herbs",
          imageUrl:
            "https://i.ibb.co/r325xVN/joanna-kosinska-i0-Ivw-Ahh-GZM-unsplash.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "Fruits",
          imageUrl:
            "https://i.ibb.co/MSpdHJm/reiseuhu-JI5-Vd-AD2m-Ao-unsplash.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

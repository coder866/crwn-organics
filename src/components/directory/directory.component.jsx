import React from "react";
import "./directory.style.scss";
import { MenuItem } from "../menuitem/menu-item.component";

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
          linkUrl: "shop/vegetables",
        },
        {
          title: "cereals",
          imageUrl:
            "https://i.ibb.co/Ydgjjvp/v2osk-c9-Ofr-Ve-D-t-Q-unsplash.jpg",
          id: 2,
          linkUrl: "shop/cereals",
        },
        {
          title: "spices",
          imageUrl:
            "https://i.ibb.co/d2Lg8zF/laura-cortesi-NMF5s-Ea-HUmo-unsplash.jpg",
          id: 3,
          linkUrl: "shop/spices",
        },
        {
          title: "herbs",
          imageUrl:
            "https://i.ibb.co/r325xVN/joanna-kosinska-i0-Ivw-Ahh-GZM-unsplash.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/herbs",
        },
        {
          title: "Fruits",
          imageUrl:
            "https://i.ibb.co/MSpdHJm/reiseuhu-JI5-Vd-AD2m-Ao-unsplash.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/fruits",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;

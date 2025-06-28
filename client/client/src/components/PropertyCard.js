import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.name} />
        <div className="property-price">${property.price}/mo</div>
      </div>
      <div className="property-details">
        <h3 className="property-title">{property.name}</h3>
        <div className="property-location">
          <span>{property.address}</span>
        </div>
        <div className="property-features">
          <div className="feature">{property.type}</div>
          <div className="feature">{property.sqft} sq ft</div>
        </div>
        <button className="view-button">View Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;

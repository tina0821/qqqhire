import React, { useState } from 'react';
import cityData from '../../data/CityCountyData.json';
import options from '../../data/item.json';

function ProductTop() {
  //小類大類
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //縣市

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  return (
    <>
      <div className="category-section">
        <div className="category-section-title">
          <form id="search-group">
            <div className="form-search">
              <input type="text" id="keyW" placeholder="關鍵字" />
              <button type="submit" id="search-button">
                <i className="bi bi-search"></i>
              </button>
            </div>
            <div id="search-form">
              <div className="form-group">
                <select
                  className="form-control"
                  id="category-select"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">類別</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <select className="form-control" id="sub-category-select">
                  {selectedCategory ? null : <option value="">小類</option>}
                  {options
                    .find((option) => option.value === selectedCategory)
                    ?.subOptions.map((subOption) => (
                      <option key={subOption} value={subOption}>
                        {subOption}
                      </option>
                    ))}
                </select>
              </div>
              <div className="form-group">
                <select
                  className="form-control"
                  value={selectedCity}
                  onChange={handleCityChange}
                >
                  <option value="">選擇縣市</option>
                  {cityData.map((city) => (
                    <option key={city.CityName} value={city.CityName}>
                      {city.CityName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <select
                  className="form-control"
                  value={selectedArea}
                  onChange={handleAreaChange}
                >
                  {selectedCity ? null : <option value="">選擇區域</option>}
                  {cityData.map((city) => {
                    if (city.CityName === selectedCity) {
                      return city.AreaList.map((area) => (
                        <option key={area.ZipCode} value={area.AreaName}>
                          {area.AreaName}
                        </option>
                      ));
                    }
                    return null;
                  })}
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProductTop;

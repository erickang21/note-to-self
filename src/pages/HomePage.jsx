import React from 'react';
import '../css/homepage.css';

const editIcon = 'https://cdn.discordapp.com/attachments/520734295112024064/1206417372890796043/icons8-edit-64.png?ex=65dbeebb&is=65c979bb&hm=7a7e67713f7248c6236f603b67817edec3b5c00543933c512b662643e945aa09&';
const unlockIcon = 'https://cdn.discordapp.com/attachments/520734295112024064/1206420453581783050/icons8-unlock-80.png?ex=65dbf19a&is=65c97c9a&hm=8061d040eae8fe8621babcd40fefa7ad12e2028f436800a567d8c936f4d4fa0f&';
const tagIcon = 'https://media.discordapp.net/attachments/520734295112024064/1206436343882715207/icons8-circle-100.png?ex=65dc0066&is=65c98b66&hm=28623355f14bd8ca6f76478500f268c7e90fab263a2cb29faaa9bc4299431b09&=&format=webp&quality=lossless&width=125&height=125';
function Tag({
  iconUrl, text, bgColor, borderColor,
}) {
  return (
    <div className="tag" style={{ backgroundColor: bgColor ?? 'lightblue', border: `1px solid ${borderColor}` ?? 'blue' }}>
      <img
        src={iconUrl}
        alt="icon"
        className="tag-header"
      />
      <p className="tag-text">{text}</p>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">why do i even exist</p>
        <Tag iconUrl={editIcon.toString()} text="Written on February 6, 2024" />
        <Tag iconUrl={unlockIcon.toString()} text="Unlocked on February 8, 2024" bgColor="lightgreen" borderColor="green"/>
      </div>
      <div className="card-tags">
        <p className="card-tags-header">Tags:</p>
        <div className="card-tags-list">
          <Tag iconUrl={tagIcon} text="life changing" bgColor="lightgray" borderColor="black"/>
          <Tag iconUrl={tagIcon} text="important" bgColor="lightgray" borderColor="black"/>
          <Tag iconUrl={tagIcon} text="depresso" bgColor="lightgray" borderColor="black"/>
        </div>
      </div>
      <div className="card-body">
        <p className="card-body-summary-header">Summary:</p>
        <p className="card-body-summary">on this day i was changed...</p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-heading">
        <h1 className="homepage-greeting">Good morning, Lexie :)</h1>
        <h2 className="homepage-date">Feb 11, 2024</h2>
      </div>
      <div className="homepage-body">
        <Card />
      </div>
    </div>
  );
}

export default HomePage;

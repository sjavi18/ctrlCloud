
import './App.css';
import { generate as id } from 'shortid'

//Components
import Header from './components/Header'
import Person from './components/Person'
import Cards from './components/Cards';

function App() {
  const cards = [
    {
      id: id(),
      title: "Card 1",
      img: '/assets/wolf.jpg',
      author: 'Dorian',
      date: new Date().toLocaleDateString(),
      tags: ['animal', 'wolf', 'snow'],
      views: 23,
      description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    },
    {
      id: id(),
      title: "Card 2",
      img: '/assets/wolf.jpg',
      author: 'Dorian',
      date: new Date().toLocaleDateString(),
      tags: ['animal', 'wolf', 'snow'],
      views: 23,
      description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    },
    {
      id: id(),
      title: "Card 3",
      img: '/assets/wolf.jpg',
      author: 'Dorian',
      date: new Date().toLocaleDateString(),
      tags: ['animal', 'wolf', 'snow'],
      views: 23,
      description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    }
  ]
  return (
    <div className="container">
      <div className="row">
      {
        cards.map(card => {
          return <Cards info={{
            autor: card.author,
            date: card.date,
            img: card.img,
            key: card.key,
            tags: card.tags,
            title: card.title,
            views: card.views,
            description: card.description
          }}></Cards>
        }
        )
      }
      </div>
    </div>

  );
}

export default App;

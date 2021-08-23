import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Marco',
      company: 'Kangwon',
      theme: 'dark',
      title: 'student',
      email: 'bkkim@kangwon.ac.kr',
      message: 'go for it',
      fileName: 'fileName',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Marco2',
      company: 'Kangwon',
      theme: 'light',
      title: 'student',
      email: 'bkkim@kangwon.ac.kr',
      message: 'go for it',
      fileName: 'fileName',
      fileURL: 'Marco.png',
    },
    {
      id: '3',
      name: 'Marco3',
      company: 'Kangwon',
      theme: 'colorful',
      title: 'student',
      email: 'bkkim@kangwon.ac.kr',
      message: 'go for it',
      fileName: 'fileName',
      fileURL: null,
    },
  ]);
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;

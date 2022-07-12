import Image from 'next/image';
import React from 'react';
import { EIcon, Icon } from '../Icon';
import styles from './carousel.module.css';

export function Carousel() {
  return (
    <div className={styles.carousel}>
      <Image src={'/woman.png'} alt="Dphjc" width={315} height={315} />

      <Icon
        className={'hand'}
        img='/icon1.png'
        width={135}
        height={135}
        text='Ограниченная способность поднимать руки и переносить предметы'
      />
      <Icon
        className={'mouth'}
        img='/icon2.png'
        width={105}
        height={105}
        text='Нарушения жевания и глотания'
      />
      <Icon
        className={'lungs'}
        img='/icon3.png'
        width={115}
        height={115}
        text='Дыхательная недостаточность/ респираторная дисфункция'
      />
      <Icon
        className={'legs'}
        img='/icon4.png'
        width={105}
        height={105}
        text='Неспособность бегать, изменение походки'
      />
      <Icon
        className={'joints'}
        img='/icon5.png'
        width={105}
        height={105}
        text='Контрактура суставов'
      />
      <Icon
        className={'hips'}
        img='/icon6.png'
        width={105}
        height={105}
        text='Вывих бедра'
      />
      <Icon
        className={'human'}
        img='/icon7.png'
        width={105}
        height={105}
        text='Утомляемость'
      />
      <Icon
        className={'scoliosis'}
        img='/icon8.png'
        width={113}
        height={113}
        text='Сколиоз'
      />

    </div>
  );
}

import March7 from './images/march7.webp'
import March7S from './images/march7S.webp'
import Himeko from './images/himeko.webp'
import HimekoS from './images/HimekoS.webp'
import DanHeng from './images/danheng.webp'
import DanHengS from './images/danhengS.webp'
import Welt from './images/welt.webp'
import WeltS from './images/WeltS.webp'
import Trailblazer from './images/trailblazer.webp'
import TrailblazerS from './images/trailblazerS.png'
import Astral from './images/astral.png'

import Herta from './images/herta.webp'
import HertaS from './images/hertaS.webp'
import Asta from './images/asta.webp'
import AstaS from './images/astaS.webp'
import Arlan from './images/arlan.webp'
import ArlanS from './images/arlanS.webp'
import RuanMei from './images/ruanmei.webp'
import RuanMeiS from './images/ruanmeiS.webp'
import SilverWolf from './images/silverwolf.webp'
import SilverWolfS from './images/silverwolfS.webp'
import HertaStation from './images/hertabg.png'

import Bronya from './images/bronya.webp'
import BronyaS from './images/bronyaS.webp'
import Gepard from './images/gepard.webp'
import GepardS from './images/gepardS.webp'
import Serval from './images/serval.webp'
import ServalS from './images/servalS.webp'
import Lynx from './images/lynx.webp'
import LynxS from './images/lynxS.webp'
import Pela from './images/pela.webp'
import PelaS from './images/pelaS.webp'
import Belabog from './images/belabogBG.png'

import JianYuan from './images/jingyuan.webp'
import JianYuanS from './images/jingyuanS.png'
import Bailu from './images/bailu.webp'
import BailuS from './images/bailuS.png'
import Imbibitor from './images/imbibitor.webp'
import ImbibitorS from './images/imbibitorS.png'
import Jingliu from './images/jingliu.webp'
import JingliuS from './images/jingliuS.png'
import FuaXuan from './images/fuxuan.webp'
import FuaXuanS from './images/fuxuanS.png'
import Xianzhou from './images/shipbg.png'

import BlackSwan from './images/BSwan.png'
import BlackSwanS from './images/BSwanS.webp'
import Archeron from './images/Archeron.webp'
import ArcheronS from './images/ArcheronS.webp'
import Adventurine from './images/Adventurine.webp'
import AdventurineS from './images/AdventurineS.webp'
import Misha from './images/Misha.webp'
import MishaS from './images/MishaS.webp'
import Sparkle from './images/Sparkle.webp'
import SparkleS from './images/SparkleS.webp'
import Gallagher from './images/Gallagher.webp'
import GallagherS from './images/GallagherS.webp'
import Penacony from './images/penacony.png'
import Elements from './Elements'
import astralPin from './images/astralPin.webp'
import HertaPin from './images/hertaPiN.webp'
import belabogPin from './images/belabogPin.webp'
import XianzhouPin from './images/XianzhouPin.webp'
import PenaconyPin from './images/penaconyPin.webp'


const CharacterList = [
  {
    id: 'Astral Express', 
    locationPin: astralPin,
    bg: Astral,
    characters: [
    {
      id: 0,
      name: 'March 7th',
      image: March7,
      imageSmall: March7S,
      element: 'Ice'
    },
    {
      id: 1,
      name: 'Himeko',
      image: Himeko,
      imageSmall: HimekoS,
      element: 'Fire'
    },
    {
      id: 2,
      name: 'Dan Heng',
      image: DanHeng,
      imageSmall: DanHengS,
      element: 'Wind'
    },
    {
      id: 3,
      name: 'Welt',
      image: Welt,
      imageSmall: WeltS,
      element: 'Imaginary'
    },
    {
      id: 4,
      name: 'Trailblazer',
      image: Trailblazer,
      imageSmall: TrailblazerS,
      element: 'Physical'
    },
  ]
  },
  {
    id: 'Herta Station',
    locationPin: HertaPin,
    bg: HertaStation,
    characters: [
      {
        id: 0,
        name: 'Herta',
        image: Herta,
        imageSmall: HertaS,
        element: 'Ice'
      },
      {
        id: 1,
        name: 'Arlan',
        image: Arlan,
        imageSmall: ArlanS,
        element: 'Lightning'
      },
      {
        id: 2,
        name: 'Asta',
        image: Asta,
        imageSmall: AstaS,
        element: 'Fire'
      },
      {
        id: 3,
        name: 'Ruan Mei',
        image: RuanMei,
        imageSmall: RuanMeiS,
        element: 'Ice'
      },
      {
        id: 4,
        name: 'Silver Wolf',
        image: SilverWolf,
        imageSmall: SilverWolfS,
        element: 'Quantum'
      },
    ]
  },
  {
    id: 'Belabog',
    locationPin: belabogPin,
    bg: Belabog,
    characters: [
      {
        id: 0,
        name: 'Pela',
        image: Pela,
        imageSmall: PelaS,
        element: 'Ice'
      },
      {
        id: 1,
        name: 'Gepard',
        image: Gepard,
        imageSmall: GepardS,
        element: 'Ice'
      },
      {
        id: 2,
        name: 'Serval',
        image: Serval,
        imageSmall: ServalS,
        element: 'Lightning'
      },
      {
        id: 3,
        name: 'Lynx',
        image: Lynx,
        imageSmall: LynxS,
        element: 'Quantum'
      },
      {
        id: 4,
        name: 'Bronya',
        image: Bronya,
        imageSmall: BronyaS,
        element: 'Wind'
      },
    ]
  },
  {
    id: 'Xianzhou',
    locationPin: XianzhouPin,
    bg: Xianzhou,
    characters: [
      {
        id: 0,
        name: 'Jian Yuan',
        image: JianYuan,
        imageSmall: JianYuanS,
        element: 'Lightning'
      },
      {
        id: 1,
        name: 'Bailu',
        image: Bailu,
        imageSmall: BailuS,
        element: 'Lightning'
      },
      {
        id: 2,
        name: 'Imbibitor Lunae',
        image: Imbibitor,
        imageSmall: ImbibitorS,
        element: 'Imaginary'
      },
      {
        id: 3,
        name: 'Jing Liu',
        image: Jingliu,
        imageSmall: JingliuS,
        element: 'Ice'
      },
      {
        id: 4,
        name: 'Fu Xuan',
        image: FuaXuan,
        imageSmall: FuaXuanS,
        element: 'Quantum'
      },
    ]
  },
  {
    id: 'Penacony',
    locationPin: PenaconyPin,
    bg:  Penacony,
    characters: [
      {
        id: 0,
        name: 'Black Swan',
        image: BlackSwan,
        imageSmall: BlackSwanS,
        element: 'Wind'
      },
      {
        id: 1,
        name: 'Sparkle',
        image: Sparkle,
        imageSmall: SparkleS,
        element: 'Quantum'
      },
      {
        id: 2,
        name: 'Archeron',
        image: Archeron,
        imageSmall: ArcheronS,
        element: 'Lightning'
      },
      {
        id: 3,
        name: 'Adventurine',
        image: Adventurine,
        imageSmall: AdventurineS,
        element: 'Imaginary'
      },
      {
        id: 4,
        name: 'Gallagher',
        image: Gallagher,
        imageSmall: GallagherS,
        element: 'Fire'
      },
    ]
  },
]
export default CharacterList;
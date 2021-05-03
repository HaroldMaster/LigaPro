import { moduleMetadata } from '@storybook/angular';
import { TeamCardComponent } from './team-card.component';


export default {
    title: 'Code Input Card',
    component: TeamCardComponent,
    decorators: [
      moduleMetadata({
        imports: [
        ],
        providers: [],
        declarations: [
            
        ]
      }),
    ],
    };

export const mainCard = () => ({
      component: TeamCardComponent,
      props: {
        title : 'LDU Quito',
        description : 'Liga Deportiva Universitaria, often referred to as Liga de Quito, LDU, is an Ecuadorian professional football club based in Quito. They play in the Serie A, the highest level of the Ecuadorian professional football league. They play their home games at the Estadio Rodrigo Paz Delgado, more commonly referred to as Casa Blanca. Rival clubs include Quito-based clubs El Nacional, Deportivo Quito, Aucas and Universidad Católica. Liga Deportiva',
        imgBadge : 'https://www.thesportsdb.com/images/media/team/badge/u9r71n1579959729.png',
        imgShirt : 'https://www.thesportsdb.com/images/media/team/jersey/ywbpjo1616240161.png'
      },
});
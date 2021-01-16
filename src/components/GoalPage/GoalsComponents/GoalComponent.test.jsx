import {create} from 'react-test-renderer';
import React from "react";
import GoalComponent from "./GoalComponent";

const state = {
  "id": 58,
  "name": "134sasdasd",
  "explanation": "",
  "progress": 75,
  "tasks": [
    {
      "id": 206,
      "name": "sdfgsdf",
      "done": true
    },
    {
      "id": 207,
      "name": "asdasd",
      "done": true
    },
    {
      "id": 208,
      "name": "",
      "done": true
    }
  ],
  "done": false
};
describe('Goal component', () => {
    test('goals edit mode should be turn off', () => {
      const component = create(<GoalComponent state={state}/>);
      const instance = component.root;
      const input = instance.findAllByType("input");
      expect(input.length).toBe(state.tasks.length);
    });
    test('while edit mode turn off component should contain', () => {
      const component = create(<GoalComponent state={state}/>);
      const instance = component.root;
      const p = instance.findAllByType("p");
      const outputArray = p[0].children.concat( p[1].children);
      expect(outputArray).toEqual([state.name, state.explanation]);
    });
    test('goals edit mode should be turn on after click', () => {
      const component = create(<GoalComponent state={state}/>);
      const instance = component.root;
      const button = instance.findAllByType('button')[0];
      button.props.onClick();
      const input = instance.findAllByType("input");
      const outputArray = [input[0].props.value, input[1].props.value];
      expect(outputArray).toEqual([state.name, state.explanation]);
    });

  }
);
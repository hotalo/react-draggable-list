/* @flow */

import React, {PropTypes} from 'react';

type Props = {
  item: Object;
  template: Function;
  itemSelected: number;
  anySelected: number;
  dragHandle: Function;
};
export default class TemplateContainer extends React.Component {
  props: Props;
  static propTypes = {
    item: PropTypes.object.isRequired,
    template: PropTypes.func.isRequired,
    itemSelected: PropTypes.number.isRequired,
    anySelected: PropTypes.number.isRequired,
    dragHandle: PropTypes.func.isRequired
  };

  shouldComponentUpdate(prevProps: Props): boolean {
    return this.props.anySelected !== prevProps.anySelected ||
      this.props.itemSelected !== prevProps.itemSelected ||
      this.props.item !== prevProps.item ||
      this.props.template !== prevProps.template;
  }

  getTemplate(): React.Element {
    return this.refs.template;
  }

  render() {
    const {item, itemSelected, anySelected, dragHandle} = this.props;
    const Template = this.props.template;

    return (
      <Template
        ref="template"
        item={item}
        itemSelected={itemSelected}
        anySelected={anySelected}
        dragHandle={dragHandle}
        />
    );
  }
}

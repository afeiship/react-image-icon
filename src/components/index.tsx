import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import filterProps from '@jswork/filter-react-props';

export interface Props extends React.HTMLProps<HTMLImageElement> {
  className?: string;
  value?: string;
  disabled?: boolean;
}

const CLASS_NAME = 'react-image-icon';

export default class ReactImageIcon extends Component<Props> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * If show disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The icon image src.
     */
    value: PropTypes.string,
    /**
     * Image icon width/height.
     */
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
  };

  static defaultProps = { size: 40 };

  get sizeProps() {
    const { size } = this.props;
    if (typeof size !== 'object') {
      return { width: size, height: size };
    }
    return size;
  }

  render() {
    const { className, value, ...props } = this.props;
    const theProps = filterProps(props);

    return (
      <img
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        src={value}
        {...this.sizeProps}
        {...theProps}
      />
    );
  }
}

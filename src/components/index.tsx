import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import filterProps from '@jswork/filter-react-props';

type ImageProps = React.HTMLProps<HTMLImageElement>;

interface ValueTypes {
  normal?: string;
  hover?: string;
}

interface State {
  hovering: boolean;
}

export interface Props extends ImageProps {
  className?: string;
  value?: ImageProps['value'] & ValueTypes;
  disabled?: boolean;
  size?: any;
}

const CLASS_NAME = 'react-image-icon';

export default class ReactImageIcon extends Component<Props, State> {
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
    value: PropTypes.any.isRequired,
    /**
     * Image icon width/height.
     */
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
  };

  static defaultProps = { size: 40 };

  state = { hovering: false };

  get sizeProps() {
    const { size } = this.props;
    if (typeof size !== 'object') {
      return { width: size, height: size };
    }
    return size;
  }

  get src() {
    const value = this.props.value;
    if (typeof value === 'object') {
      return this.state.hovering ? value.hover : value.normal;
    }
    return value;
  }

  handleMouseEnter = () => {
    this.setState({ hovering: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovering: false });
  };

  render() {
    const { className, value, ...props } = this.props;
    const theProps = filterProps(props);

    return (
      <img
        data-component={CLASS_NAME}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={classNames(CLASS_NAME, className)}
        src={this.src}
        {...this.sizeProps}
        {...theProps}
      />
    );
  }
}

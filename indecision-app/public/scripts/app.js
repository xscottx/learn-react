'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// stateless functional component
// need state? -> use class
// don't need state? -> use stateless functional component

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        return _this;
    }

    // need to pass callback function in to listen for events in child to be invoked here to update state (parent)


    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {

            // old school syntax
            //     this.setState(() => {
            //         return {
            //             options: []
            //         }
            //     });

            // ES6 syntax
            this.setState(function () {
                return { options: [] };
            }); // returns state object back with options

            var num = function num() {}; // returns nothing back
            var num2 = function num2() {
                return {};
            }; // returns empty option back
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            console.log('handleAddOption: ' + option);
            // event.preventDefault();
            // const option = event.target.elements.optshon.value.trim();  // optshon comes from input name attribute
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exists';
            } else {
                // BAD options: prevState.options.push(option) <- changing previous state
                // GOOD use array concat method options: prevState.options.concat([option])
                // BEST use array concat method options: prevState.options.concat(option)
                this.setState(function (prevState) {
                    return {
                        options: prevState.options.concat(option)
                    };
                });
            }
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            console.log('handlePick');
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert('randomly picked option: ' + option);
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            console.log('handleDeleteOption', optionToRemove);
            // leverage Arrays.filter to create a new array of options filtering out the unmatched one
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of a computer';
            console.log('options: ' + this.state.options);
            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    subtitle: subtitle
                }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                handleDeleteOption: props.handleDeleteOption,
                optionText: option
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        // making sure that the context of this for handleAddOption will always be used for AddOptions
        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);

        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    // leaving handleAddOption in here so that we can do form-related things inside AddOption and not in parent


    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(event) {
            event.preventDefault();
            var option = event.target.elements.optshon.value.trim();
            var error = this.props.handleAddOption(option);

            if (error) {
                // ES6 syntax for 'error: error; -> then 'error'
                this.setState(function () {
                    return { error: error };
                });
            } else {
                event.target.elements.optshon.value = '';
                this.setState(function () {
                    return { error: undefined };
                });
            }
        }

        // makes sure the bind of this is the same in render as in AddOption
        // <form onSubmit={this.handleAddOption.bind(this)}>  // but this is inefficient bc it will bind on every render

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'optshon' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit Button'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// leverage JSX syntax to throw in indecisionapp 


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

import React, {Component, useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';

class AccordionView extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <TextInput
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>
    );
  };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <TextInput
          label="Reduced Price"
          value={ReducedPrice}
          onChangeText={text => setText(text)}
        />
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        <TextInput
          label="Category"
          value={Category}
          onChangeText={text => setText(text)}
        />
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  render() {
    return (
      <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}
export default AccordionView;

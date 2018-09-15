/**
 * Created by prabhjotrai on 15/09/18.
 */
import React, { Component } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';

import Input from 'components/CustomInput/CustomInput';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';

export default class AddNewItem extends Component {
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem md={12}>
            <Input
              labelText={'Name of item'}
              formControlProps={{ fullWidth: true }}
              inputProps={{ fullWidth: true }}
            />
          </GridItem>
          <GridItem md={12}>
            <Input
              labelText={'Type of item'}
              formControlProps={{ fullWidth: true }}
              inputProps={{ fullWidth: true }}
            />
          </GridItem>
          <GridItem md={12}>
            <Input
              labelText={'Description of item'}
              formControlProps={{ fullWidth: true }}
              inputProps={{ fullWidth: true, multiline: true, rows: 3 }}
            />
          </GridItem>
          <GridItem md={6}>
            <Input
              labelText={'Price'}
              formControlProps={{ fullWidth: true }}
              inputProps={{
                fullWidth: true,
                type: 'number',
                startAdornment: (
                  <InputAdornment position="start">₹</InputAdornment>
                )
              }}
            />
          </GridItem>
          <GridItem md={6}>
            <Button color={'rose'} fullWidth>
              Upload Image
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

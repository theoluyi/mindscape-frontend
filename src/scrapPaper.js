

<Grid centered columns={2}>
<Grid.Column>
  <Header as="h2" textAlign="center">
    Login
  </Header>
  <Segment>
    <uiForm size="large">
      <uiForm.Input
        fluid
        icon="user"
        iconPosition="left"
        placeholder="Email address"
      />
      <uiForm.Input
        fluid
        icon="lock"
        iconPosition="left"
        placeholder="Password"
        type="password"
      />

      <Button color="blue" fluid size="large">
        Login
      </Button>
    </uiForm>
  </Segment>
  <Message>
    Not registered yet? <a href="#">Sign Up</a>
  </Message>
</Grid.Column>
</Grid>
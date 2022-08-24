import React from "react";

const SignUp = () => {
  return (
    <Form
      name="signUp"
      initialValues={{ remember: true }}
      onFinish={this.onSignUpFinish}
      validateMessages={validateMessages}
      ref={this.formRef}
      className={styles.auth_form}
    >
      <Form.Item name="username" rules={[{ required: true, label: "Name" }]}>
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, type: "email", label: "Email" }]}
      >
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, label: "Password" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item
        name="confirmedPassword"
        rules={[
          { required: true, label: "Password" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          loading={this.props.isSigningUp}
          htmlType="submit"
          className={styles.register_button}
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;

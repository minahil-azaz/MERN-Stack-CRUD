// src/App.jsx

<div className="min-h-screen bg-gray-200 flex flex-col p-4 ">
  <div className="flex rounded-lg justify-between items-center bg-gray-300 w-10/12 p-4 my-5 mx-10">
    <h1 className="capitalize text-rose-600 text-2xl md:text-5xl font-bold">
      Mern Crud Operations
    </h1>
    <Button
      shape="circle"
      size="large"
      className="bg-green-600 text-white"
      type="text"
      icon={<PlusOutlined />}
    />
  </div>

  <Table
    className="w-10/12 mx-8"
    columns={Columns}
    dataSource={data}
  />

  <Modal
    open={true}
    footer={null}
    title={
      <h1 className="text-xl font-semibold">Registration Form</h1>
    }
    width={720}
  >
    <Form layout="vertical">
      {/* FIXED grid classes */}
      <div className="mt-5 grid md:grid-cols-2 gap-x-4 gap-y-2">

        <Form.Item label="Profile" name="profile">
          <input type="file" className="w-full border p-2" />
        </Form.Item>

        <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
          <input className="w-full border p-2" />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <input className="w-full border p-2" />
        </Form.Item>

        <Form.Item label="Mobile" name="mobile" rules={[{ required: true }]}>
          <input className="w-full border p-2" />
        </Form.Item>

        <Form.Item label="DOB" name="dob">
          <input type="date" className="w-full border p-2" />
        </Form.Item>

        <Form.Item label="Gender" name="gender">
          <input className="w-full border p-2" />
        </Form.Item>

        <Form.Item label="Address" name="address">
          <input className="w-full border p-2" />
        </Form.Item>

      </div>
    </Form>
  </Modal>
</div>
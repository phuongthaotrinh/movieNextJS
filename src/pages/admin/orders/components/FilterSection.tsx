import {Button,  DatePicker, Row, Col, Typography, Form, Card, Input,Space, AutoComplete } from 'antd';
import {FilterOutlined } from "@ant-design/icons";
import {useState} from "react";
import type { DatePickerProps } from 'antd';



type Props = {
    openFilter: boolean;
    setOpenFilter :any;
    form?:any;
    onFinish?:any;
    onReset?:any
}

const FilterSection = ({openFilter, setOpenFilter, form, onFinish, onReset}: Props) => {
    const [options, setOptions] = useState<{ value: string }[]>([]);

    const handleSearch = (value: string) => {

    };

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <>
            <Button type="default" onClick={() => setOpenFilter(!openFilter)} icon={<FilterOutlined />}>Bộ lọc</Button>
            {openFilter && (
                <Card bodyStyle={{padding: 0}} style={{width: "calc(100% + 25%)", marginTop: "0.5rem", padding: "3rem"}}>
                    <Form
                        layout="horizontal"
                        onFinish={onFinish}
                        form={form}
                        labelCol={{ flex: '110px' }}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{ flex: 1 }}
                        colon={false}
                        style={{ maxWidth: 600 }}
                    >
                        <Row gutter={[16,0]}>
                            <Col span={12}>
                                <Form.Item label="Mã đơn hàng"  name="orderCode">
                                    <Input placeholder="Nhập mã đơn hàng" />
                                </Form.Item>
                                <Form.Item label="Tên người đặt" name="userInfo">
                                    <Input placeholder="Nhập tên người đặt" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="SDT người đặt " name="phone">
                                    <Input  placeholder="Nhập sdt người đặt" />
                                </Form.Item>
                                <Form.Item label="Ngày đặt hàng" name="createdAt">
                                    <DatePicker onChange={onChange}  style={{width: "100%"}} placeholder="Ngày đặt hàng"/>
                                </Form.Item>
                            </Col>
                            <Col span={24} push={12}>
                                <Form.Item>
                                    <Space>
                                        <Button type="primary" htmlType="submit" style={{width: "200px"}}>
                                            Tìm kiếm
                                        </Button>
                                        <Button htmlType="button" onClick={onReset}>
                                            Reset
                                        </Button>
                                    </Space>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            )}
        </>
    )
}
export default FilterSection


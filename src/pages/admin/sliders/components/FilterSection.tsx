import {Button, Form, Card, Input, Space} from 'antd';
import {FilterOutlined} from "@ant-design/icons";

type Props = {
    openFilter: boolean;
    setOpenFilter: any;
    form?: any;
    onFinish?: any;
    onReset?: any
}

const FilterSection = ({openFilter, setOpenFilter, form, onFinish, onReset}: Props) => {

    return (
        <>
            <Button type="default" onClick={() => setOpenFilter(!openFilter)} icon={<FilterOutlined/>}>Bộ lọc</Button>
            {openFilter && (
                <Card bodyStyle={{padding: 0}}
                      style={{width: "calc(100% + 25%)", marginTop: "0.5rem", padding: "3rem"}}>
                    <Form
                        layout="horizontal"
                        onFinish={onFinish}
                        form={form}
                        labelCol={{flex: '110px'}}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{flex: 1}}
                        colon={false}
                        style={{maxWidth: 600}}
                    >
                        <Form.Item label="Tên sliders" name="name">
                            <Input placeholder="Nhập tên slider "/>
                        </Form.Item>
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
                    </Form>
                </Card>
            )}
        </>
    )
}
export default FilterSection


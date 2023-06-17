import Link from 'next/link';
import dynamic from "next/dynamic";
import {Button, Tabs, Form} from 'antd';
import { SharedIcons } from '@/utils';
import { HeaderAction } from '@/components/common';
import { MyPage } from '@/models/common';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const FetchData  =  dynamic(() => import('./components/fetchData'));
const FilterSection = dynamic(() => import("./components/FilterSection"));
const { FaArrowRight, PlusOutlined } = SharedIcons;


const Index:MyPage = () => {
    const dispatch = useAppDispatch();
    const [dataActive, setDataActive] = useState<any[]>([]);
    const [dataInActive, setDataInActive] = useState<any[]>([]);
    const [openFilter,setOpenFilter ] = useState<boolean>(false);
    const [form] = Form.useForm();
    const pending = false;

    const onFinish = (values:any) => {
        console.log("onFinish", values)
    }

    const onReset = () => {
        form.resetFields();
        setOpenFilter(!openFilter)
    };

    const headerActionComp = [
        {
            key: 1,
            comp: <Link href="/admin/products/create"> <Button type="dashed" icon={<PlusOutlined />}>Tạo sản phẩm </Button></Link>
        }
    ];
    const tabItems: any[] = [
        {
            key: 1,
            label: `Sản phẩm đang bán (${dataActive.length})`,
            children: <FetchData dataSource={undefined} loading={pending} compStatus="active"/>
        },
        {
            key: 2,
            label: `Sản phẩm ngừng kinh doanh (${dataInActive.length}) `,
            children: <FetchData dataSource={undefined} loading={pending} compStatus="inActive"/>
        }
    ];

    return (
        <>
            <HeaderAction
                title="Danh sách sản phẩm"
                components={headerActionComp}
                children={
                    <FilterSection
                        openFilter={openFilter}
                        setOpenFilter={setOpenFilter}
                        form={form}
                        onFinish={onFinish}
                        onReset={onReset}

                    />
                }
            />
            <Tabs
                defaultActiveKey="1"
                size={"small"}
                style={{ marginBottom: 32 }}
                items={tabItems}
            />
        </>
    )
}

export default Index;
Index.Layout="Admin";
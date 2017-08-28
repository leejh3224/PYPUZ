import React from 'react'
import { 
    Title,
    Labels
} from '../atom'
import { Blocks } from './Blocks'

// some comment
export const HomeBody = () => (
    <div>
        <Title text={'What do you like?'} center />
        <Labels 
            texts={[
                'Infinite Challenge', 
                'Running Man',
                '아는 형님',
                '뜨거운 형제들',
                'Happy Together',
                'Radio Star',
                '하트 시그널',
                '청춘시대',
                '태양의 후예'
            ]} 
        />
        <Blocks 
            srcs={[
                "https://i.ytimg.com/vi/3DRHHIsldhU/maxresdefault.jpg",
                "https://www.allkpop.com/upload/2017/05/af_org/08003347/twice.jpg",
                "http://file2.instiz.net/data/cached_img/upload/2016/04/01/0/f26e0fece4f72fd3e17805f23748097b.jpg",
                "https://images.vingle.net/upload/t_ca_l/i2phlswevdmtse1kuswo.jpg",
                "http://1.bp.blogspot.com/-JkdNAoGBPvc/Vm7cNmhHgZI/AAAAAAAAF7M/UXM1r93giVI/s1600/01.jpg",
                "http://dispatch.cdnser.be/dispatch_image/2014/1/6/201416112439404kim_T5_61532.jpg",
                "http://dispatch.cdnser.be/dispatch_image/2014/1/6/20141611241w91jkim_T5_61526.jpg",
                "http://www.nemopan.com/files/attach/images/6294/722/417/008/%EB%B0%95%EC%8B%A0%ED%98%9C_025.jpg",
                "http://file2.instiz.net/data/cached_img/upload/2017/07/03/20/300cfe78aedfb79b91c5f0b402467fef.jpg"
            ]} 
        />      
    </div>
)
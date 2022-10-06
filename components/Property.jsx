import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from "millify";

import DefaultImage from '../assets/images/house.jpg'

const two = new Number(2)

const Property = ({property: { contactName, coverPhoto, location, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId}}) => (
    <Box borderWidth='1px' borderRadius='lg' m='5' boxShadow='lg' overflow='hidden'>
        <Link href={`/property/${externalId}`} passHref>
            <Flex flexWrap='wrap' w='380px' justifyContent='flex-start' cursor='pointer'>
                <Box>
                    <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt='house'/>
                </Box>
                <Box p='5' w='full'>
                    <Flex  paddingTop='2' alignItems='center' justifyContent='space-between'>
                        <Flex alignItems='center'>
                            <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
                            <Text fontWeight='bold' color='purple.500' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box>
                            <Avatar size='sm' src={agency?.logo?.url} />
                        </Box>
                    </Flex>
                    <Text fontSize='2xl' fontWeight='bold'>
                        {contactName}
                    </Text>
                    <Text fontSize='sm' color='gray' paddingBottom='2'>
                        {title.length > 50 ? `${title.substring(0,30)}...` : title}
                    </Text>
                    <hr />
                    <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='purple.400'>
                        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                    </Flex>
                    
                </Box>
            </Flex>
        </Link>
    </Box>
)

export default Property
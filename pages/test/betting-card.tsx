'use client';

import type React from 'react';

import { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  Grid,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react';

interface BetOption {
  id: string;
  title: string;
  odds: string;
  description?: string;
  imageUrl: string;
}

interface BettingCardProps {
  title: string;
  subtitle?: string;
  date?: string;
  options: BetOption[];
  onSelectOption?: (optionId: string) => void;
}

export default function BettingCard({
  title,
  subtitle,
  date,
  options,
  onSelectOption,
}: BettingCardProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [superSelected, setSuperSelected] = useState<boolean>(false);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const titleColor = useColorModeValue('gray.800', 'white');
  const subtitleColor = useColorModeValue('gray.600', 'gray.400');
  const dateColor = useColorModeValue('gray.500', 'gray.500');

  // Define color mode values outside the conditional logic
  const selectedOptionBg = useColorModeValue('#e6e0ff', '#19007a');
  const unselectedOptionBg = useColorModeValue('gray.50', 'gray.700');
  const selectedBorderColor = '#3301ff';
  const unselectedBorderColor = borderColor;
  const notSelectedTextColor = useColorModeValue('gray.400', 'gray.500');
  const selectedTextColor = useColorModeValue('#2600cc', '#b8a6ff');
  const defaultTextColor = useColorModeValue('gray.800', 'white');
  const selectedOddsColor = '#3301ff';
  const notSelectedOddsColor = useColorModeValue('gray.400', 'gray.500');
  const defaultOddsColor = useColorModeValue('gray.600', 'gray.400');
  const hoverSelectedBg = useColorModeValue('#d1c4ff', '#1f00a3');
  const hoverUnselectedBg = useColorModeValue('gray.100', 'gray.600');

  const superButtonSelectedBg = useColorModeValue('#f0f0f0', '#2d2d2d');
  const superButtonSelectedColor = useColorModeValue('#a0a0a0', '#6d6d6d');
  const superButtonHoverBg = useColorModeValue('#4f24ff', '#4f24ff');
  const superButtonHoverColor = useColorModeValue('white', 'white');
  const superButtonBorderColor = useColorModeValue('#e0e0e0', '#3d3d3d');

  const handleSelectOption = (optionId: string): void => {
    setSelectedOption(optionId);
    setSuperSelected(false);
    if (onSelectOption) {
      onSelectOption(optionId);
    }
  };

  const handleSuperSelect = (optionId: string, event: React.MouseEvent): void => {
    event.stopPropagation();
    if (selectedOption === optionId) {
      // Toggle super state if clicking on the already selected option's super button
      setSuperSelected(!superSelected);
    } else if (selectedOption === null) {
      // If no option is selected, select this option and enable super
      setSelectedOption(optionId);
      setSuperSelected(true);
    }

    if (onSelectOption) {
      onSelectOption(optionId);
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      borderColor={borderColor}
      overflow="visible"
      bg={bgColor}
      boxShadow="md"
      width="100%"
      maxWidth="700px" // Reduced max width
      position="relative"
    >
      {/* Card Header - More compact */}
      <Box p={3} borderBottomWidth="1px" borderColor={borderColor}>
        <Text fontSize="lg" fontWeight="bold" color={titleColor}>
          {title}
        </Text>
        {subtitle && (
          <Text fontSize="sm" color={subtitleColor} mt={0.5}>
            {subtitle}
          </Text>
        )}
        {date && (
          <Text fontSize="xs" color={dateColor} mt={0.5}>
            {date}
          </Text>
        )}
      </Box>

      {/* Betting Options Grid - More compact */}
      <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }} gap={0}>
        {options.map((option, index) => {
          const isSelected = selectedOption === option.id;
          const isNotSelected = selectedOption !== null && !isSelected;
          const isLeftColumn = index % 2 === 0;
          const isRightColumn = !isLeftColumn;
          const isLastRow = index >= options.length - (options.length % 2 === 0 ? 2 : 1);

          // Use the color mode values based on the selection state
          const optionBg = isSelected ? selectedOptionBg : unselectedOptionBg;
          const optionBorderColor = isSelected ? selectedBorderColor : unselectedBorderColor;
          const optionTextColor =
            selectedOption === null
              ? defaultTextColor
              : isSelected
              ? selectedTextColor
              : notSelectedTextColor;
          const oddsColor =
            selectedOption === null
              ? defaultOddsColor
              : isSelected
              ? selectedOddsColor
              : notSelectedOddsColor;
          const hoverBg = isSelected ? hoverSelectedBg : hoverUnselectedBg;

          return (
            <GridItem
              key={option.id}
              position="relative"
              py={3} // Increased vertical padding
              px={2}
              bg={optionBg}
              borderRightWidth={isLeftColumn ? { base: '0', sm: '1px' } : '0'}
              borderBottomWidth={isLastRow ? '0' : '1px'}
              borderColor={optionBorderColor}
              cursor="pointer"
              transition="all 0.2s"
              _hover={{
                bg: hoverBg,
              }}
              onClick={() => handleSelectOption(option.id)}
              minHeight="70px" // Ensure minimum height for SUPER button
            >
              {/* More compact layout with HStack */}
              <Flex align="center">
                {/* Logo and Title */}
                <HStack spacing={2} flex="1" maxWidth="calc(100% - 60px)">
                  {' '}
                  {/* Limit width to leave space for odds */}
                  {/* Team Logo - Smaller fixed size */}
                  <Box
                    position="relative"
                    width="50px"
                    height="50px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    overflow="hidden"
                    flexShrink={0}
                  >
                    <Image
                      src={option.imageUrl || '/placeholder.svg'}
                      alt={`${option.title} logo`}
                      width={isSelected ? '45px' : '40px'}
                      height={isSelected ? '45px' : '40px'}
                      objectFit="contain"
                      transition="all 0.3s ease"
                      filter={isNotSelected ? 'grayscale(100%)' : 'grayscale(0%)'}
                      opacity={isNotSelected ? 0.6 : 1}
                      transform={isSelected ? 'scale(1.1)' : 'scale(1)'}
                    />
                  </Box>
                  {/* Title and Description */}
                  <Box overflow="hidden">
                    <Text
                      fontSize="md"
                      fontWeight="bold"
                      color={optionTextColor}
                      transition="color 0.2s"
                      lineHeight="1.2"
                      noOfLines={1}
                    >
                      {option.title}
                    </Text>
                    {option.description && (
                      <Text
                        fontSize="xs"
                        color={optionTextColor}
                        transition="color 0.2s"
                        lineHeight="1.2"
                        mt={0.5}
                        noOfLines={1}
                      >
                        {option.description}
                      </Text>
                    )}
                  </Box>
                </HStack>

                {/* Odds */}
                <Text
                  fontSize="lg"
                  fontWeight="extrabold"
                  color={oddsColor}
                  transition="color 0.2s"
                  width="55px" // Fixed width for odds
                  textAlign="right"
                >
                  {option.odds}
                </Text>
              </Flex>

              {/* Super Button - Position based on column */}
              <Box
                position="absolute"
                top="0"
                bottom="0"
                // Position on left for left column items, right for right column items
                right={{ base: 'auto', sm: isRightColumn ? '-24px' : 'auto' }}
                left={{ base: '-24px', sm: isLeftColumn ? '-24px' : 'auto' }}
                width="24px" // Smaller width
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg={isSelected && superSelected ? selectedOddsColor : superButtonSelectedBg}
                color={isSelected && superSelected ? 'white' : superButtonSelectedColor}
                cursor={isSelected || selectedOption === null ? 'pointer' : 'not-allowed'}
                opacity={!isSelected && selectedOption !== null ? 0.4 : 1}
                transition="all 0.2s"
                _hover={{
                  bg:
                    isSelected || selectedOption === null
                      ? superButtonHoverBg
                      : superButtonSelectedBg,
                  color:
                    isSelected || selectedOption === null
                      ? superButtonHoverColor
                      : superButtonSelectedColor,
                }}
                onClick={(e) =>
                  (isSelected || selectedOption === null) && handleSuperSelect(option.id, e)
                }
                // Border radius based on position
                borderTopLeftRadius={isLeftColumn ? 'md' : '0'}
                borderBottomLeftRadius={isLeftColumn ? 'md' : '0'}
                borderTopRightRadius={isRightColumn ? 'md' : '0'}
                borderBottomRightRadius={isRightColumn ? 'md' : '0'}
                borderWidth="1px"
                borderColor={
                  isSelected && superSelected ? selectedOddsColor : superButtonBorderColor
                }
                zIndex="1"
              >
                <Box>
                  <Text
                    sx={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'upright',
                      letterSpacing: '0px', // Reduced letter spacing
                      fontWeight: 'bold',
                      fontSize: '2xs', // Smaller font
                    }}
                  >
                    SUPER
                  </Text>
                  <Text fontSize="sm" mt={0.5} textAlign="center">
                    {isSelected && superSelected ? '⚡' : '+'}
                  </Text>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

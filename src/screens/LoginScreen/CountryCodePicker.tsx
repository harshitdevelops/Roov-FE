import { useState } from 'react';
import { FlatList, Modal, Pressable, View } from 'react-native';
import { Text } from '../../components/common';
import { ChevronDownIcon, CloseIcon, Flag } from '../../components/icons';
import { colors } from '../../theme';
import { COUNTRIES, type Country } from '../../constants/countries';
import { pickerStyles as styles } from './styles';

type CountryCodePickerProps = {
  value: Country;
  onSelect: (country: Country) => void;
};

function RowDivider() {
  return <View style={styles.rowDivider} />;
}

export function CountryCodePicker({ value, onSelect }: CountryCodePickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Country code ${value.dialCode}`}
        hitSlop={8}
        onPress={() => setOpen(true)}
        style={styles.trigger}
      >
        <Flag iso2={value.iso2} width={22} />
        <Text variant="body" color={colors.text.primary}>
          {value.dialCode}
        </Text>
        <ChevronDownIcon width={16} height={16} color={colors.text.muted} />
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="slide"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)} />
        <View style={styles.sheet}>
          <View style={styles.sheetHeader}>
            <Text variant="h4">Select country</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Close"
              hitSlop={8}
              onPress={() => setOpen(false)}
            >
              <CloseIcon width={22} height={22} color={colors.text.muted} />
            </Pressable>
          </View>

          <FlatList
            data={COUNTRIES}
            keyExtractor={item => item.iso2}
            ItemSeparatorComponent={RowDivider}
            renderItem={({ item }) => {
              const selected = item.iso2 === value.iso2;
              return (
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ selected }}
                  style={styles.row}
                  onPress={() => {
                    onSelect(item);
                    setOpen(false);
                  }}
                >
                  <Flag iso2={item.iso2} width={28} />
                  <Text
                    variant="body"
                    color={colors.text.primary}
                    style={styles.rowName}
                  >
                    {item.name}
                  </Text>
                  <Text variant="body" color={colors.text.muted}>
                    {item.dialCode}
                  </Text>
                </Pressable>
              );
            }}
          />
        </View>
      </Modal>
    </>
  );
}

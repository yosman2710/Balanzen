import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
    User,
    Bell,
    Lock,
    Palette,
    HelpCircle,
    FileText,
    LogOut,
    ChevronRight,
    Shield,
    Globe,
    FolderOpen,
} from 'lucide-react-native';
import { Card } from '../component/ui/Card';
import { Button } from '../component/ui/Button';
import { Switch } from '../component/ui/Switch';
import { Avatar } from '../component/ui/Avatar';
import { styles } from '../styles/Profile.style';

interface ProfileScreenProps {
    userName?: string;
    userEmail?: string;
    onLogout?: () => void;
    onManageCategories?: () => void;
}

const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

export function ProfileScreen({ userName, userEmail, onLogout, onManageCategories }: ProfileScreenProps) {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerCenter}>
                        <Avatar
                            size={96}
                            backgroundColor="rgba(255,255,255,0.2)"
                            text={getInitials(userName || 'Demo User')}
                        />
                        <Text style={styles.headerName}>{userName || 'Demo User'}</Text>
                        <Text style={styles.headerEmail}>{userEmail || 'demo@user.com'}</Text>
                    </View>
                </View>

                <View style={styles.sectionsWrapper}>
                    {/* Cuenta */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Cuenta</Text>
                        <Card>
                            <ProfileRow
                                icon={<User size={20} color="#2563eb" />}
                                iconBg="#dbeafe"
                                title="Información personal"
                                subtitle="Actualiza tu perfil"
                            />
                            <ProfileRow
                                icon={<Lock size={20} color="#7c3aed" />}
                                iconBg="#e9d5ff"
                                title="Seguridad"
                                subtitle="Contraseña y autenticación"
                            />
                            <ProfileRow
                                icon={<Shield size={20} color="#ea580c" />}
                                iconBg="#ffedd5"
                                title="Privacidad"
                                subtitle="Controla tus datos"
                            />
                        </Card>
                    </View>

                    {/* Gestión de datos */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Gestión de Datos</Text>
                        <Card>
                            <ProfileRow
                                icon={<FolderOpen size={20} color="#059669" />}
                                iconBg="#d1fae5"
                                title="Gestionar categorías"
                                subtitle="Crear, editar y eliminar categorías"
                                onPress={() => { console.log('Gestionar categorías') }}
                                showChevron
                            />
                        </Card>
                    </View>

                    {/* Preferencias */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Preferencias</Text>
                        <Card>
                            <View style={styles.rowContainer}>
                                <View style={styles.rowLeft}>
                                    <View style={[styles.rowIconCircle, { backgroundColor: '#d1fae5' }]}>
                                        <Bell size={20} color="#059669" />
                                    </View>
                                    <View>
                                        <Text style={styles.rowTitle}>Notificaciones</Text>
                                        <Text style={styles.rowSubtitle}>Alertas de gastos y metas</Text>
                                    </View>
                                </View>
                                <Switch defaultValue />
                            </View>

                            <ProfileRow
                                icon={<Palette size={20} color="#db2777" />}
                                iconBg="#fce7f3"
                                title="Apariencia"
                                subtitle="Tema y personalización"
                                showChevron
                            />
                            <ProfileRow
                                icon={<Globe size={20} color="#0f766e" />}
                                iconBg="#ccfbf1"
                                title="Idioma y región"
                                subtitle="Español (México)"
                                showChevron
                            />
                        </Card>
                    </View>

                    {/* Soporte */}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Soporte</Text>
                        <Card>
                            <ProfileRow
                                icon={<HelpCircle size={20} color="#4f46e5" />}
                                iconBg="#e0e7ff"
                                title="Centro de ayuda"
                                subtitle="FAQs y tutoriales"
                                showChevron
                            />
                            <ProfileRow
                                icon={<FileText size={20} color="#0891b2" />}
                                iconBg="#cffafe"
                                title="Términos y condiciones"
                                subtitle="Políticas de uso"
                                showChevron
                            />
                        </Card>
                    </View>

                    {/* Info app */}
                    <Card>
                        <Text style={styles.appName}>FinanzasPro</Text>
                        <Text style={styles.appVersion}>Versión 1.0.0</Text>
                    </Card>

                    {/* Cerrar sesión */}
                    <Button onPress={() => { console.log('Cerrar sesión') }} style={styles.logoutButton}>
                        <LogOut size={20} color="#dc2626" style={{ marginRight: 8 }} />
                        <Text style={styles.logoutText}>Cerrar sesión</Text>
                    </Button>

                    <View style={{ height: 16 }} />
                </View>
            </ScrollView>
        </View>
    );
};

interface ProfileRowProps {
    icon: React.ReactNode;
    iconBg: string;
    title: string;
    subtitle: string;
    onPress?: () => void;
    showChevron?: boolean;
}

const ProfileRow: React.FC<ProfileRowProps> = ({
    icon,
    iconBg,
    title,
    subtitle,
    onPress,
    showChevron = true,
}) => {
    const Content = (
        <View style={styles.rowContainer}>
            <View style={styles.rowLeft}>
                <View style={[styles.rowIconCircle, { backgroundColor: iconBg }]}>
                    {icon}
                </View>
                <View>
                    <Text style={styles.rowTitle}>{title}</Text>
                    <Text style={styles.rowSubtitle}>{subtitle}</Text>
                </View>
            </View>
            {showChevron && <ChevronRight size={18} color="#94a3b8" />}
        </View>
    );

    if (onPress) {
        return (
            <Button onPress={onPress} style={styles.rowButton}>
                {Content}
            </Button>
        );
    }

    return <View style={styles.rowButton}>{Content}</View>;
};

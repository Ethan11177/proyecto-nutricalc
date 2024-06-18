import React from 'react';
import { Container, Typography, Box, Card, CardContent, Paper, Grid, TextField, Select, MenuItem, InputLabel, FormControl, Avatar, Button } from '@mui/material';
import { styled } from '@mui/system';

const RootContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 1200,
    width: '100%',
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
}));

const ExplanationBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    marginLeft: theme.spacing(3),
}));

const explanationTextLogin = `
Este es el formulario de inicio de sesión de la aplicación. A continuación, se describe la funcionalidad de cada uno de los componentes:
1. Logo: Este es el logo de la aplicación.
2. Dirección de correo electrónico: Aquí debes ingresar tu dirección de correo electrónico.
3. Contraseña: Aquí debes ingresar tu contraseña.
4. Botón de inicio de sesión: Presiona este botón para iniciar sesión.
5. Enlace para recuperar contraseña: Si olvidaste tu contraseña, haz clic aquí para recuperarla.
6. Enlace para registrarse: Si no tienes una cuenta, puedes registrarte haciendo clic aquí.
7. Términos de uso y política de privacidad: Aquí puedes revisar los términos de uso y la política de privacidad.
`;

const explanationTextPatient = `
Este es el formulario para registrar un nuevo paciente. A continuación, se describe la funcionalidad de cada uno de los componentes:
1. Nombre: Aquí debes ingresar el nombre del paciente.
2. Apellido paterno: Aquí debes ingresar el apellido paterno del paciente.
3. Apellido materno: Aquí debes ingresar el apellido materno del paciente.
4. Correo: Aquí debes ingresar el correo electrónico del paciente.
5. Número de teléfono: Aquí debes ingresar el número de teléfono del paciente.
6. Fecha de nacimiento: Aquí debes ingresar la fecha de nacimiento del paciente.
7. Sexo: Aquí debes seleccionar el sexo del paciente.
8. Actividad física: Aquí debes seleccionar el nivel de actividad física del paciente.
9. Peso: Aquí debes ingresar el peso del paciente en kilogramos.
10. Altura: Aquí debes ingresar la altura del paciente en centímetros.
11. Circunferencia del brazo: Aquí debes ingresar la circunferencia del brazo del paciente en centímetros.
12. Pliegue cutáneo del tríceps: Aquí debes ingresar el pliegue cutáneo del tríceps del paciente en milímetros.
13. Ácido úrico: Aquí debes ingresar el nivel de ácido úrico del paciente en mg/dL.
14. Albúmina: Aquí debes ingresar el nivel de albúmina del paciente en g/dL.
15. Colesterol: Aquí debes ingresar el nivel de colesterol del paciente en mg/dL.
16. Globulina: Aquí debes ingresar el nivel de globulina del paciente en g/dL.
17. Hematocrito: Aquí debes ingresar el nivel de hematocrito del paciente en %.
18. Proteínas totales: Aquí debes ingresar el nivel de proteínas totales del paciente en g/dL.
19. Tensión diastólica: Aquí debes ingresar la tensión diastólica del paciente en mmHg.
20. Triglicéridos: Aquí debes ingresar el nivel de triglicéridos del paciente en mg/dL.
21. Hidratos de carbono (HCO2 totales): Ejemplo: Pan, arroz, pasta.
22. Kilo calorías (KLCA totales): Ejemplo: Energía total consumida en la dieta.
23. Lípidos totales: Ejemplo: Aceite de oliva, aguacate.
24. Alimentos de origen animal altos en grasa (AOA AAG): Ejemplo: Carne de res, carne de cerdo.
25. Alimentos de origen animal bajos en grasa (AOA BAG): Ejemplo: Pollo sin piel, pescado.
26. Alimentos de origen animal muy bajos en grasa (AOA MBAG): Ejemplo: Claras de huevo, pescado magro.
27. Alimentos de origen animal con mediana cantidad de grasa (AOA MAG): Ejemplo: Yogur natural, leche semidescremada.
28. Aceites con proteína (Aceites C/P): Ejemplo: Aceite de soya, aceite de linaza.
29. Aceites sin proteína (Aceites S/P): Ejemplo: Aceite de oliva, aceite de girasol.
30. Azúcar sin grasa (Azúcar S/G): Ejemplo: Azúcar blanca, miel.
31. Cereales con grasa (Cereales C/G): Ejemplo: Galletas, pasteles.
32. Cereales sin grasa (Cereales S/G): Ejemplo: Pan integral, arroz integral.
33. Frutas: Ejemplo: Manzana, plátano.
34. Leche con azúcar (Leche C/A): Ejemplo: Leche con chocolate.
35. Leche descremada (Leche Des): Ejemplo: Leche descremada.
36. Leche entera: Ejemplo: Leche entera.
37. Leche semi descremada (Leche Semi): Ejemplo: Leche semidescremada.
38. Leguminosas: Ejemplo: Frijoles, lentejas.
39. Verduras: Ejemplo: Espinacas, zanahorias.
`;

const DisabledPatientForm = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Avatar
                    alt="Preview"
                    src="https://via.placeholder.com/150"
                    sx={{ width: 100, height: 100, margin: '0 auto' }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Nombre"
                    variant="outlined"
                    name="nombre"
                    value="Ejemplo Nombre"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Apellido paterno"
                    variant="outlined"
                    name="apelPate"
                    value="Ejemplo Apellido"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Apellido materno"
                    variant="outlined"
                    name="apelMate"
                    value="Ejemplo Apellido"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Correo"
                    variant="outlined"
                    name="correo"
                    value="ejemplo@correo.com"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Número de teléfono"
                    variant="outlined"
                    name="numero"
                    value="1234567890"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Fecha de nacimiento"
                    variant="outlined"
                    type="date"
                    value="2000-01-01"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Sexo</InputLabel>
                    <Select
                        value="hombre"
                        label="Sexo"
                        readOnly
                        inputProps={{ readOnly: true }}
                    >
                        <MenuItem value="hombre">Hombre</MenuItem>
                        <MenuItem value="mujer">Mujer</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel>Actividad física</InputLabel>
                    <Select
                        value="sedentario"
                        label="Actividad física"
                        readOnly
                        inputProps={{ readOnly: true }}
                    >
                        <MenuItem value="sedentario">Sedentario</MenuItem>
                        <MenuItem value="poco activo">Poco activo</MenuItem>
                        <MenuItem value="activo moderacion">Activo con moderación</MenuItem>
                        <MenuItem value="activo">Activo</MenuItem>
                        <MenuItem value="muy activo">Muy activo</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Peso (kg)"
                    variant="outlined"
                    name="weight"
                    value="70"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Altura (cm)"
                    variant="outlined"
                    name="height"
                    value="170"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Circunferencia del brazo (cm)"
                    variant="outlined"
                    name="circunferencia_brazo"
                    value="30"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Pliegue cutáneo del tríceps (mm)"
                    variant="outlined"
                    name="pliegue_triceps"
                    value="10"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Ácido úrico (mg/dL)"
                    variant="outlined"
                    name="acidoUrico"
                    value="5.5"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Albúmina (g/dL)"
                    variant="outlined"
                    name="albumina"
                    value="4.5"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Colesterol (mg/dL)"
                    variant="outlined"
                    name="colesterol"
                    value="200"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Globulina (g/dL)"
                    variant="outlined"
                    name="globulina"
                    value="2.5"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Hematocrito (%)"
                    variant="outlined"
                    name="hematocrito"
                    value="45"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Proteínas totales (g/dL)"
                    variant="outlined"
                    name="proteinas"
                    value="7.0"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Tensión diastólica (mmHg)"
                    variant="outlined"
                    name="tension"
                    value="80"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Triglicéridos (mg/dL)"
                    variant="outlined"
                    name="triglicerido"
                    value="150"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" align="center" gutterBottom>
                    Porciones dietéticas
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="AOA AAG"
                    variant="outlined"
                    name="aoaAAG"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="AOA BAG"
                    variant="outlined"
                    name="aoaBAG"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="AOA MAG"
                    variant="outlined"
                    name="aoaMAG"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="AOA MBAG"
                    variant="outlined"
                    name="aoaMBAG"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Aceites C/P"
                    variant="outlined"
                    name="aceitesCP"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Aceites S/P"
                    variant="outlined"
                    name="aceitesSP"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Azúcar S/G"
                    variant="outlined"
                    name="azucarSG"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Cereales C/G"
                    variant="outlined"
                    name="cerealesCG"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Cereales S/G"
                    variant="outlined"
                    name="cerealesSG"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Frutas"
                    variant="outlined"
                    name="frutas"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Leche C/A"
                    variant="outlined"
                    name="lecheCA"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Leche Des"
                    variant="outlined"
                    name="lecheDes"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Leche Entera"
                    variant="outlined"
                    name="lecheEntera"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Leche Semi"
                    variant="outlined"
                    name="lecheSemi"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Leguminosas"
                    variant="outlined"
                    name="leguminosas"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Verduras"
                    variant="outlined"
                    name="verduras"
                    value="Ejemplo"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
        </Grid>
    );
};

const DisabledLoginForm = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Avatar
                    alt="Logo"
                    src="https://via.placeholder.com/150"
                    sx={{ width: 100, height: 100, margin: '0 auto' }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Dirección de correo electrónico"
                    variant="outlined"
                    name="email"
                    value="ejemplo@correo.com"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Contraseña"
                    variant="outlined"
                    name="password"
                    type="password"
                    value="password123"
                    InputProps={{ readOnly: true }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled
                >
                    Iniciar sesión
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" align="center">
                    <Button color="primary" disabled>
                        ¿Olvidaste tu contraseña?
                    </Button>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" align="center">
                    <Button color="primary" disabled>
                        ¿No tienes una cuenta? Regístrate
                    </Button>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body2" align="center">
                    <Button color="primary" disabled>
                        Términos de uso y política de privacidad
                    </Button>
                </Typography>
            </Grid>
        </Grid>
    );
};

const TourManual = () => {
    return (
        <RootContainer>
            <StyledCard>
                <Typography variant="h4" gutterBottom>
                    Manual de usuario
                </Typography>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>
                                Ejemplo del componente de inicio de sesión
                            </Typography>
                            <Box mt={0}>
                                <DisabledLoginForm />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ExplanationBox>
                                <Typography variant="body1" paragraph>
                                    {explanationTextLogin.split('\n').map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </Typography>
                            </ExplanationBox>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} mt={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>
                                Ejemplo del componente de registro de paciente
                            </Typography>
                            <Box mt={0}>
                                <DisabledPatientForm />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ExplanationBox>
                                <Typography variant="body1" paragraph>
                                    {explanationTextPatient.split('\n').map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                                </Typography>
                            </ExplanationBox>
                        </Grid>
                    </Grid>
                </CardContent>
            </StyledCard>
        </RootContainer>
    );
};

export default TourManual;
